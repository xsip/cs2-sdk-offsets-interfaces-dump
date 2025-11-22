// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x1460
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CInferno  = {
	...server_CBaseModelEntity,
	m_firePositions: 2008n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireParentPositions: 2776n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_bFireIsBurning: 3544n, // bool m_bFireIsBurning[64]; |  0xdd8 | Schema_FixedArray | Size: 0x40
	m_BurnNormal: 3608n, // GlobalTypes::Vector[64]  | Schema_FixedArray | Size: 0x300
	m_fireCount: 4376n, // int32_t m_fireCount; |  0x1118 | Schema_Builtin | Size: 0x4
	m_nInfernoType: 4380n, // int32_t m_nInfernoType; |  0x111c | Schema_Builtin | Size: 0x4
	m_nFireEffectTickBegin: 4384n, // int32_t m_nFireEffectTickBegin; |  0x1120 | Schema_Builtin | Size: 0x4
	m_nFireLifetime: 4388n, // float32 m_nFireLifetime; |  0x1124 | Schema_Builtin | Size: 0x4
	m_bInPostEffectTime: 4392n, // bool m_bInPostEffectTime; |  0x1128 | Schema_Builtin | Size: 0x1
	m_bWasCreatedInSmoke: 4393n, // bool m_bWasCreatedInSmoke; |  0x1129 | Schema_Builtin | Size: 0x1
	m_extent: 4912n, // navlib::Extent  | Schema_DeclaredClass | Size: 0x18
	m_damageTimer: 4936n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_damageRampTimer: 4960n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_splashVelocity: 4984n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_InitialSplashVelocity: 4996n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_startPos: 5008n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecOriginalSpawnLocation: 5020n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_activeTimer: 5032n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_fireSpawnOffset: 5048n, // int32_t m_fireSpawnOffset; |  0x13b8 | Schema_Builtin | Size: 0x4
	m_nMaxFlames: 5052n, // int32_t m_nMaxFlames; |  0x13bc | Schema_Builtin | Size: 0x4
	m_nSpreadCount: 5056n, // int32_t m_nSpreadCount; |  0x13c0 | Schema_Builtin | Size: 0x4
	m_BookkeepingTimer: 5064n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_NextSpreadTimer: 5088n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_nSourceItemDefIndex: 5112n, // uint16_t m_nSourceItemDefIndex; |  0x13f8 | Schema_Builtin | Size: 0x2
}
