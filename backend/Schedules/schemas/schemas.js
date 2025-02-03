const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const Schedule = require('../models/schedulesModel');

const ScheduleType = new GraphQLObjectType({
    name: 'Schedule',
    fields: () => ({
        id: { type: GraphQLInt },
        day: { type: GraphQLString },
        start_time: { type: GraphQLString },
        end_time: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        schedules: {
            type: new GraphQLList(ScheduleType),
            resolve(parent, args) {
                return Schedule.findAll().then(res => res.rows);
            },
        },
        schedule: {
            type: ScheduleType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return Schedule.findById(args.id).then(res => res.rows[0]);
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addSchedule: {
            type: ScheduleType,
            args: {
                day: { type: new GraphQLNonNull(GraphQLString) },
                start_time: { type: new GraphQLNonNull(GraphQLString) },
                end_time: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const newSchedule = {
                    day: args.day,
                    start_time: args.start_time,
                    end_time: args.end_time,
                };
                return Schedule.create(newSchedule).then(res => res.rows[0]);
            },
        },
        deleteSchedule: {
            type: ScheduleType,
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve(parent, args) {
                return Schedule.delete(args.id).then(res => res.rows[0]);
            },
        },
        updateSchedule: {
            type: ScheduleType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                day: { type: GraphQLString },
                start_time: { type: GraphQLString },
                end_time: { type: GraphQLString },
            },
            resolve(parent, args) {
                const updatedSchedule = {
                    day: args.day,
                    start_time: args.start_time,
                    end_time: args.end_time,
                };
                return Schedule.update(args.id, updatedSchedule).then(res => res.rows[0]);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
