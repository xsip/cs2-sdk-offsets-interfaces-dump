// generated - do not edit!

import {server_CCSWeaponBase} from './CCSWeaponBase';
// Class size: 0x1250
// BaseClass: : public CS2::server::CCSWeaponBase
export const server_CC4  = {
	...server_CCSWeaponBase,
	m_vecLastValidPlayerHeldPosition: 4608n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecLastValidDroppedPosition: 4620n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bDoValidDroppedPositionCheck: 4632n, // bool m_bDoValidDroppedPositionCheck; |  0x1218 | Schema_Builtin | Size: 0x1
	m_bStartedArming: 4633n, // bool m_bStartedArming; |  0x1219 | Schema_Builtin | Size: 0x1
	m_fArmedTime: 4636n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bBombPlacedAnimation: 4640n, // bool m_bBombPlacedAnimation; |  0x1220 | Schema_Builtin | Size: 0x1
	m_bIsPlantingViaUse: 4641n, // bool m_bIsPlantingViaUse; |  0x1221 | Schema_Builtin | Size: 0x1
	m_entitySpottedState: 4648n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 4672n, // int32_t m_nSpotRules; |  0x1240 | Schema_Builtin | Size: 0x4
	m_bPlayedArmingBeeps: 4676n, // bool m_bPlayedArmingBeeps[7]; |  0x1244 | Schema_FixedArray | Size: 0x7
	m_bBombPlanted: 4683n, // bool m_bBombPlanted; |  0x124b | Schema_Builtin | Size: 0x1
}
