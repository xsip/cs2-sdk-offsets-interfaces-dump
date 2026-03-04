// generated - do not edit!

import {server_CPlayer_WeaponServices} from './CPlayer_WeaponServices';
// Class size: 0x18D8
// BaseClass: : public CS2::server::CPlayer_WeaponServices
export const server_CCSPlayer_WeaponServices  = {
	...server_CPlayer_WeaponServices,
	m_flNextAttack: 192n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsLookingAtWeapon: 196n, // bool m_bIsLookingAtWeapon; |  0xc4 | Schema_Builtin | Size: 0x1
	m_bIsHoldingLookAtWeapon: 197n, // bool m_bIsHoldingLookAtWeapon; |  0xc5 | Schema_Builtin | Size: 0x1
	m_hSavedWeapon: 200n, // GlobalTypes::CHandle<server::CBasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_nTimeToMelee: 204n, // int32_t m_nTimeToMelee; |  0xcc | Schema_Builtin | Size: 0x4
	m_nTimeToSecondary: 208n, // int32_t m_nTimeToSecondary; |  0xd0 | Schema_Builtin | Size: 0x4
	m_nTimeToPrimary: 212n, // int32_t m_nTimeToPrimary; |  0xd4 | Schema_Builtin | Size: 0x4
	m_nTimeToSniperRifle: 216n, // int32_t m_nTimeToSniperRifle; |  0xd8 | Schema_Builtin | Size: 0x4
	m_bIsBeingGivenItem: 220n, // bool m_bIsBeingGivenItem; |  0xdc | Schema_Builtin | Size: 0x1
	m_bIsPickingUpItemWithUse: 221n, // bool m_bIsPickingUpItemWithUse; |  0xdd | Schema_Builtin | Size: 0x1
	m_bPickedUpWeapon: 222n, // bool m_bPickedUpWeapon; |  0xde | Schema_Builtin | Size: 0x1
	m_bDisableAutoDeploy: 223n, // bool m_bDisableAutoDeploy; |  0xdf | Schema_Builtin | Size: 0x1
	m_bIsPickingUpGroundWeapon: 224n, // bool m_bIsPickingUpGroundWeapon; |  0xe0 | Schema_Builtin | Size: 0x1
	m_networkAnimTiming: 6328n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_bBlockInspectUntilNextGraphUpdate: 6352n, // bool m_bBlockInspectUntilNextGraphUpdate; |  0x18d0 | Schema_Builtin | Size: 0x1
}
