 import compHome from './components/Home.vue';
 import compCustomer from './components/Customer/Customer.vue';
 import CustomerStart from './components/Customer/CustomerStart.vue';
 import CustomerDetail from './components/Customer/CustomerDetail.vue';
 import CustomerEdit from './components/Customer/CustomerEdit.vue';

 export const routes = [{

         path: '',
         component: compHome,
         name: 'home'

     },
     {
         path: '/customer',
         component: compCustomer,
         children: [{

                 path: '',
                 component: CustomerStart
             },
             {
                 path: ':id',
                 component: CustomerDetail

             },
             {
                 path: ':id/edit',
                 component: CustomerEdit,
                 name: 'customerEdit'
             }
         ]

     },
     {
         path: '*',
         component: compHome
     }



 ];