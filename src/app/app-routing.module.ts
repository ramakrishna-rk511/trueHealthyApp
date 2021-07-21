import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list-page',
    loadChildren: () => import('./list-page/list-page.module').then( m => m.ListPagePageModule)
  },
  {
    path: 'single',
    loadChildren: () => import('./single/single.module').then( m => m.SinglePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'referandearn',
    loadChildren: () => import('./referandearn/referandearn.module').then( m => m.ReferandearnPageModule)
  },
  {
    path: 'truehealthyaccess',
    loadChildren: () => import('./truehealthyaccess/truehealthyaccess.module').then( m => m.TruehealthyaccessPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'wallet-history',
    loadChildren: () => import('./wallet-history/wallet-history.module').then( m => m.WalletHistoryPageModule)
  },
  {
    path: 'mysubscriptionlist',
    loadChildren: () => import('./mysubscriptionlist/mysubscriptionlist.module').then( m => m.MysubscriptionlistPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'addressedit',
    loadChildren: () => import('./addressedit/addressedit.module').then( m => m.AddresseditPageModule)
  },
  {
    path: 'addresslist',
    loadChildren: () => import('./addresslist/addresslist.module').then( m => m.AddresslistPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
