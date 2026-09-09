import { defineField, defineType } from "sanity";

export const devExpo = defineType({
    name: "devExpo",
    title: "Developer Experience",
    type: "document",
    fields: [
        defineField({
            name: "jobTitle",
            title: "Job Title",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'startDate',
            title: 'start date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM'
            },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "endDate",
            title: "End Date",
            type: "date",
            options: {
                dateFormat: "YYYY-MM"
            }
        })

    ],
})