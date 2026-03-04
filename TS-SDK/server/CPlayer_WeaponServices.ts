// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0xB0
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CPlayer_WeaponServices  = {
	...client_CPlayerPawnComponent,
	m_hMyWeapons: 72n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBasePlayerWeapon>>  | Schema_Atomic | Size: 0x18
	m_hActiveWeapon: 96n, // GlobalTypes::CHandle<server::CBasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_hLastWeapon: 100n, // GlobalTypes::CHandle<server::CBasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_iAmmo: 104n, // uint16_t m_iAmmo[32]; |  0x68 | Schema_FixedArray | Size: 0x40
	m_bPreventWeaponPickup: 168n, // bool m_bPreventWeaponPickup; |  0xa8 | Schema_Builtin | Size: 0x1
}
