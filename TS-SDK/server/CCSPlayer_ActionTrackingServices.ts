// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0x310
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CCSPlayer_ActionTrackingServices  = {
	...client_CPlayerPawnComponent,
	m_hLastWeaponBeforeC4AutoSwitch: 504n, // GlobalTypes::CHandle<server::CBasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_bIsRescuing: 548n, // bool m_bIsRescuing; |  0x224 | Schema_Builtin | Size: 0x1
	m_weaponPurchasesThisMatch: 552n, // server::WeaponPurchaseTracker_t  | Schema_DeclaredClass | Size: 0x70
	m_weaponPurchasesThisRound: 664n, // server::WeaponPurchaseTracker_t  | Schema_DeclaredClass | Size: 0x70
}
