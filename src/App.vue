<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat app color="blue" light>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer/>
            <v-btn text><v-toolbar-title>KB CORPORATE TRAINING</v-toolbar-title></v-btn>
        </v-app-bar>

        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <clientele :clients="clients"/>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer color="blue"  app>
            <span >&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>

    import Clientele from "@/components/Clientele";
    export default {
        name: 'App',
        data() {
            return {
                drawer: null,
                clients: [
                    new Client('Jane', 'Smith', 'NM', 'Developer', '262-555-5555', 'jsmith@nm.com', '800 main st'),
                    new Client('Jane', 'Doe', 'NM', 'Developer', '262-555-5555', 'jsmith@nm.com', '800 main st'),
                    new Client('Jane', 'Sample', 'NM', 'Developer', '262-555-5555', 'jsmith@nm.com', '800 main st'),

                ],
                trainers: [
                    new Trainer(),
                ],
            }
        },
        components: {Clientele, },


    }

    function Client(fname, lname, company,title, phone, email, address) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.title = title;
        this.company = company;
    }
    function Trainer() {

    }
    
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
