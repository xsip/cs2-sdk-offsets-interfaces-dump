// generated - do not edit!

import {server_CCSWeaponBase} from './CCSWeaponBase';
// Class size: 0x11B0
// BaseClass: : public CS2::server::CCSWeaponBase
export const server_CC4  = {
	...server_CCSWeaponBase,
	m_vecLastValidPlayerHeldPosition: 4448n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecLastValidDroppedPosition: 4460n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bDoValidDroppedPositionCheck: 4472n, // bool m_bDoValidDroppedPositionCheck; |  0x1178 | Schema_Builtin | Size: 0x1
	m_bStartedArming: 4473n, // bool m_bStartedArming; |  0x1179 | Schema_Builtin | Size: 0x1
	m_fArmedTime: 4476n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bBombPlacedAnimation: 4480n, // bool m_bBombPlacedAnimation; |  0x1180 | Schema_Builtin | Size: 0x1
	m_bIsPlantingViaUse: 4481n, // bool m_bIsPlantingViaUse; |  0x1181 | Schema_Builtin | Size: 0x1
	m_entitySpottedState: 4488n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 4512n, // int32_t m_nSpotRules; |  0x11a0 | Schema_Builtin | Size: 0x4
	m_bPlayedArmingBeeps: 4516n, // bool m_bPlayedArmingBeeps[7]; |  0x11a4 | Schema_FixedArray | Size: 0x7
	m_bBombPlanted: 4523n, // bool m_bBombPlanted; |  0x11ab | Schema_Builtin | Size: 0x1
}
