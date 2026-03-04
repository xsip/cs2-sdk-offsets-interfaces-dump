// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x13B8
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CInferno  = {
	...server_CBaseModelEntity,
	m_firePositions: 1840n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireParentPositions: 2608n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_bFireIsBurning: 3376n, // bool m_bFireIsBurning[64]; |  0xd30 | Schema_FixedArray | Size: 0x40
	m_BurnNormal: 3440n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireCount: 4208n, // int32_t m_fireCount; |  0x1070 | Schema_Builtin | Size: 0x4
	m_nInfernoType: 4212n, // int32_t m_nInfernoType; |  0x1074 | Schema_Builtin | Size: 0x4
	m_nFireEffectTickBegin: 4216n, // int32_t m_nFireEffectTickBegin; |  0x1078 | Schema_Builtin | Size: 0x4
	m_nFireLifetime: 4220n, // float32 m_nFireLifetime; |  0x107c | Schema_Builtin | Size: 0x4
	m_bInPostEffectTime: 4224n, // bool m_bInPostEffectTime; |  0x1080 | Schema_Builtin | Size: 0x1
	m_bWasCreatedInSmoke: 4225n, // bool m_bWasCreatedInSmoke; |  0x1081 | Schema_Builtin | Size: 0x1
	m_extent: 4744n, // navlib::Extent  | Schema_DeclaredClass | Size: 0x18
	m_damageTimer: 4768n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_damageRampTimer: 4792n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_splashVelocity: 4816n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_InitialSplashVelocity: 4828n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_startPos: 4840n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecOriginalSpawnLocation: 4852n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_activeTimer: 4864n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_fireSpawnOffset: 4880n, // int32_t m_fireSpawnOffset; |  0x1310 | Schema_Builtin | Size: 0x4
	m_nMaxFlames: 4884n, // int32_t m_nMaxFlames; |  0x1314 | Schema_Builtin | Size: 0x4
	m_nSpreadCount: 4888n, // int32_t m_nSpreadCount; |  0x1318 | Schema_Builtin | Size: 0x4
	m_BookkeepingTimer: 4896n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_NextSpreadTimer: 4920n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_nSourceItemDefIndex: 4944n, // uint16_t m_nSourceItemDefIndex; |  0x1350 | Schema_Builtin | Size: 0x2
}
