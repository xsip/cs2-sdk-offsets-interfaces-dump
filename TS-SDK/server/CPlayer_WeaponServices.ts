// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0xA8
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CPlayer_WeaponServices  = {
	...client_CPlayerPawnComponent,
	m_hMyWeapons: 64n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBasePlayerWeapon>>  | Schema_Atomic | Size: 0x18
	m_hActiveWeapon: 88n, // GlobalTypes::CHandle<server::CBasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_hLastWeapon: 92n, // GlobalTypes::CHandle<server::CBasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_iAmmo: 96n, // uint16_t m_iAmmo[32]; |  0x60 | Schema_FixedArray | Size: 0x40
	m_bPreventWeaponPickup: 160n, // bool m_bPreventWeaponPickup; |  0xa0 | Schema_Builtin | Size: 0x1
}
