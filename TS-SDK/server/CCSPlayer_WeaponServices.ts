// generated - do not edit!

import {server_CPlayer_WeaponServices} from './CPlayer_WeaponServices';
// Class size: 0x18F8
// BaseClass: : public CS2::server::CPlayer_WeaponServices
export const server_CCSPlayer_WeaponServices  = {
	...server_CPlayer_WeaponServices,
	m_flNextAttack: 184n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsLookingAtWeapon: 188n, // bool m_bIsLookingAtWeapon; |  0xbc | Schema_Builtin | Size: 0x1
	m_bIsHoldingLookAtWeapon: 189n, // bool m_bIsHoldingLookAtWeapon; |  0xbd | Schema_Builtin | Size: 0x1
	m_hSavedWeapon: 192n, // GlobalTypes::CHandle<server::CBasePlayerWeapon>  | Schema_Atomic | Size: 0x4
	m_nTimeToMelee: 196n, // int32_t m_nTimeToMelee; |  0xc4 | Schema_Builtin | Size: 0x4
	m_nTimeToSecondary: 200n, // int32_t m_nTimeToSecondary; |  0xc8 | Schema_Builtin | Size: 0x4
	m_nTimeToPrimary: 204n, // int32_t m_nTimeToPrimary; |  0xcc | Schema_Builtin | Size: 0x4
	m_nTimeToSniperRifle: 208n, // int32_t m_nTimeToSniperRifle; |  0xd0 | Schema_Builtin | Size: 0x4
	m_bIsBeingGivenItem: 212n, // bool m_bIsBeingGivenItem; |  0xd4 | Schema_Builtin | Size: 0x1
	m_bIsPickingUpItemWithUse: 213n, // bool m_bIsPickingUpItemWithUse; |  0xd5 | Schema_Builtin | Size: 0x1
	m_bPickedUpWeapon: 214n, // bool m_bPickedUpWeapon; |  0xd6 | Schema_Builtin | Size: 0x1
	m_bDisableAutoDeploy: 215n, // bool m_bDisableAutoDeploy; |  0xd7 | Schema_Builtin | Size: 0x1
	m_bIsPickingUpGroundWeapon: 216n, // bool m_bIsPickingUpGroundWeapon; |  0xd8 | Schema_Builtin | Size: 0x1
	m_networkAnimTiming: 6360n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_bBlockInspectUntilNextGraphUpdate: 6384n, // bool m_bBlockInspectUntilNextGraphUpdate; |  0x18f0 | Schema_Builtin | Size: 0x1
}
