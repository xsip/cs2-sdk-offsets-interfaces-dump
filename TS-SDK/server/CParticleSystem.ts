// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xCA8
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CParticleSystem  = {
	...server_CBaseModelEntity,
	m_szSnapshotFileName: 1840n, // char m_szSnapshotFileName[512]; |  0x730 | Schema_FixedArray | Size: 0x200
	m_bActive: 2352n, // bool m_bActive; |  0x930 | Schema_Builtin | Size: 0x1
	m_bFrozen: 2353n, // bool m_bFrozen; |  0x931 | Schema_Builtin | Size: 0x1
	m_flFreezeTransitionDuration: 2356n, // float32 m_flFreezeTransitionDuration; |  0x934 | Schema_Builtin | Size: 0x4
	m_nStopType: 2360n, // int32_t m_nStopType; |  0x938 | Schema_Builtin | Size: 0x4
	m_bAnimateDuringGameplayPause: 2364n, // bool m_bAnimateDuringGameplayPause; |  0x93c | Schema_Builtin | Size: 0x1
	m_iEffectIndex: 2368n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_flStartTime: 2376n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flPreSimTime: 2380n, // float32 m_flPreSimTime; |  0x94c | Schema_Builtin | Size: 0x4
	m_vServerControlPoints: 2384n, // GlobalTypes::Vector[4]  | Schema_FixedArray | Size: 0x30
	m_iServerControlPointAssignments: 2432n, // uint8_t m_iServerControlPointAssignments[4]; |  0x980 | Schema_FixedArray | Size: 0x4
	m_hControlPointEnts: 2436n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x100
	m_bNoSave: 2692n, // bool m_bNoSave; |  0xa84 | Schema_Builtin | Size: 0x1
	m_bNoFreeze: 2693n, // bool m_bNoFreeze; |  0xa85 | Schema_Builtin | Size: 0x1
	m_bNoRamp: 2694n, // bool m_bNoRamp; |  0xa86 | Schema_Builtin | Size: 0x1
	m_bStartActive: 2695n, // bool m_bStartActive; |  0xa87 | Schema_Builtin | Size: 0x1
	m_iszEffectName: 2696n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszControlPointNames: 2704n, // GlobalTypes::CUtlSymbolLarge[64]  | Schema_FixedArray | Size: 0x200
	m_nDataCP: 3216n, // int32_t m_nDataCP; |  0xc90 | Schema_Builtin | Size: 0x4
	m_vecDataCPValue: 3220n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nTintCP: 3232n, // int32_t m_nTintCP; |  0xca0 | Schema_Builtin | Size: 0x4
	m_clrTint: 3236n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
}
