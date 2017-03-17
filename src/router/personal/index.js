import UserInfo from '../../views/personal/common/UserInfo'
import Password from '../../views/personal/common/Password'
import SupplierOfficeInfo from '../../views/personal/supplier/OfficeInfo'

export default [
  { path: '/personal/user-info', component: UserInfo },
  { path: '/personal/password', component: Password },
  { path: '/personal/supplier/office-info', component: SupplierOfficeInfo }
]
