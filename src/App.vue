<template>
  <v-app>

    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher fixed app right>
      <v-divider></v-divider>


      <v-list dir="rtl">
        <v-list-tile value="true" v-for="(item, i) in menu" :key="i" :href="item.routerLink" v-if="item.vif">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-right" v-text="item.title">
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dir="rtl" wrap>
      <v-btn icon>
        <v-icon @click="drawer = ~drawer">mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>


      <v-spacer></v-spacer>

      <!-- home page -->
      <v-tooltip bottom>
        <v-btn icon slot="activator" @click="$router.replace({path:'/'});">
          <v-icon small>mdi-home</v-icon>
        </v-btn>
        <span>صفحه اصلی</span>
      </v-tooltip>

      <v-tooltip bottom>
        <v-btn icon slot="activator">
          <v-icon small>mdi-phone</v-icon>
        </v-btn>
        <span>تماس با ما</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" icon>
          <v-icon small>mdi-information-outline</v-icon>
        </v-btn>
        <span>درباره ما</span>
      </v-tooltip>




    </v-toolbar>
    <v-content fill-height fluid>

      <router-view />

    </v-content>





  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        axios: require("axios"),

        clipped: false,
        drawer: false,
        miniVariant: false,
        fab: false,
        rightDrawer: false,

        title: 'Vuetify.js',

      }
    },

    name: 'App',
    computed: {
      menu() {
        return [{
          icon: "mdi-blur-radial",
          title: "مدیریت 1",
          routerLink: '#/manage-cat-props',
        }, {
          icon: "mdi-blur-radial",
          title: "مدیریت 2",
          routerLink: '#/manage-props',
        }, {
          icon: "mdi-blur-radial",
          title: "مدیریت کاربران",
          routerLink: '#/admin/usermanager',
        }]
      },
    },
    methods: {


      navigatorDrower(item) {
        this.drawer = ~this.drawer;

      }
    },
    created: function () {

    },

    watch: {
      title: function (oldvalue, newvalue) {

      }
    }


  }

</script>
<style scoped>
</style>
