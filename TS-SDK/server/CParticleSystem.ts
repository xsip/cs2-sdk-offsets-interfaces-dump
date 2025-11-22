// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xD50
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CParticleSystem  = {
	...server_CBaseModelEntity,
	m_szSnapshotFileName: 2008n, // char m_szSnapshotFileName[512]; |  0x7d8 | Schema_FixedArray | Size: 0x200
	m_bActive: 2520n, // bool m_bActive; |  0x9d8 | Schema_Builtin | Size: 0x1
	m_bFrozen: 2521n, // bool m_bFrozen; |  0x9d9 | Schema_Builtin | Size: 0x1
	m_flFreezeTransitionDuration: 2524n, // float32 m_flFreezeTransitionDuration; |  0x9dc | Schema_Builtin | Size: 0x4
	m_nStopType: 2528n, // int32_t m_nStopType; |  0x9e0 | Schema_Builtin | Size: 0x4
	m_bAnimateDuringGameplayPause: 2532n, // bool m_bAnimateDuringGameplayPause; |  0x9e4 | Schema_Builtin | Size: 0x1
	m_iEffectIndex: 2536n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_flStartTime: 2544n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flPreSimTime: 2548n, // float32 m_flPreSimTime; |  0x9f4 | Schema_Builtin | Size: 0x4
	m_vServerControlPoints: 2552n, // GlobalTypes::Vector[4]  | Schema_FixedArray | Size: 0x30
	m_iServerControlPointAssignments: 2600n, // uint8_t m_iServerControlPointAssignments[4]; |  0xa28 | Schema_FixedArray | Size: 0x4
	m_hControlPointEnts: 2604n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x100
	m_bNoSave: 2860n, // bool m_bNoSave; |  0xb2c | Schema_Builtin | Size: 0x1
	m_bNoFreeze: 2861n, // bool m_bNoFreeze; |  0xb2d | Schema_Builtin | Size: 0x1
	m_bNoRamp: 2862n, // bool m_bNoRamp; |  0xb2e | Schema_Builtin | Size: 0x1
	m_bStartActive: 2863n, // bool m_bStartActive; |  0xb2f | Schema_Builtin | Size: 0x1
	m_iszEffectName: 2864n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszControlPointNames: 2872n, // GlobalTypes::CUtlSymbolLarge[64]  | Schema_FixedArray | Size: 0x200
	m_nDataCP: 3384n, // int32_t m_nDataCP; |  0xd38 | Schema_Builtin | Size: 0x4
	m_vecDataCPValue: 3388n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nTintCP: 3400n, // int32_t m_nTintCP; |  0xd48 | Schema_Builtin | Size: 0x4
	m_clrTint: 3404n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
}
