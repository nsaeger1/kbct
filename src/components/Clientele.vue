<template>
    <v-card class="mx-auto">
        <v-toolbar>
            <v-toolbar-title>Clientele</v-toolbar-title>
            <v-spacer/>
            <v-text-field v-model="searchItem" label="Last Name"/>
            <v-btn>Add Client</v-btn>

        </v-toolbar>
        <v-data-table :headers="headers" :items="searchFilter"/>
    </v-card>
</template>

<script>
    export default {
        name: "Clientele",
        props: {
            clients: {
                type: Array
            }
        },
        data() {
            return {
                searchItem: '',
                headers: [
                    {text: 'Last Name', value: 'lname'},
                    {text: 'First Name', value: 'fname'},
                    {text: 'Company', value: 'company'},
                    {text: 'Title', value: 'title'},
                    {text: 'Phone', value: 'phone'},
                    {text: 'Address', value: 'address'},
                    {text: 'Enrolled?', value: 'enrolled'},
                    //{text: 'Courses', value: 'courses'},
                    //{text: 'Description', value: 'description'},
                ],
            }
        },
        computed: {
            searchFilter: function() {
                return this.clients.filter(obj =>
                    obj.lname.toLowerCase().match(this.searchItem.toLowerCase()));
            },
        },
    }
</script>

<style scoped>

</style>