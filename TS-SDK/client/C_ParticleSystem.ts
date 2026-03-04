// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x1438
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_ParticleSystem  = {
	...client_C_BaseModelEntity,
	m_szSnapshotFileName: 3720n, // char m_szSnapshotFileName[512]; |  0xe88 | Schema_FixedArray | Size: 0x200
	m_bActive: 4232n, // bool m_bActive; |  0x1088 | Schema_Builtin | Size: 0x1
	m_bFrozen: 4233n, // bool m_bFrozen; |  0x1089 | Schema_Builtin | Size: 0x1
	m_flFreezeTransitionDuration: 4236n, // float32 m_flFreezeTransitionDuration; |  0x108c | Schema_Builtin | Size: 0x4
	m_nStopType: 4240n, // int32_t m_nStopType; |  0x1090 | Schema_Builtin | Size: 0x4
	m_bAnimateDuringGameplayPause: 4244n, // bool m_bAnimateDuringGameplayPause; |  0x1094 | Schema_Builtin | Size: 0x1
	m_iEffectIndex: 4248n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_flStartTime: 4256n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flPreSimTime: 4260n, // float32 m_flPreSimTime; |  0x10a4 | Schema_Builtin | Size: 0x4
	m_vServerControlPoints: 4264n, // GlobalTypes::Vector[4]  | Schema_FixedArray | Size: 0x30
	m_iServerControlPointAssignments: 4312n, // uint8_t m_iServerControlPointAssignments[4]; |  0x10d8 | Schema_FixedArray | Size: 0x4
	m_hControlPointEnts: 4316n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x100
	m_bNoSave: 4572n, // bool m_bNoSave; |  0x11dc | Schema_Builtin | Size: 0x1
	m_bNoFreeze: 4573n, // bool m_bNoFreeze; |  0x11dd | Schema_Builtin | Size: 0x1
	m_bNoRamp: 4574n, // bool m_bNoRamp; |  0x11de | Schema_Builtin | Size: 0x1
	m_bStartActive: 4575n, // bool m_bStartActive; |  0x11df | Schema_Builtin | Size: 0x1
	m_iszEffectName: 4576n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszControlPointNames: 4584n, // GlobalTypes::CUtlSymbolLarge[64]  | Schema_FixedArray | Size: 0x200
	m_nDataCP: 5096n, // int32_t m_nDataCP; |  0x13e8 | Schema_Builtin | Size: 0x4
	m_vecDataCPValue: 5100n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nTintCP: 5112n, // int32_t m_nTintCP; |  0x13f8 | Schema_Builtin | Size: 0x4
	m_clrTint: 5116n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bOldActive: 5152n, // bool m_bOldActive; |  0x1420 | Schema_Builtin | Size: 0x1
	m_bOldFrozen: 5153n, // bool m_bOldFrozen; |  0x1421 | Schema_Builtin | Size: 0x1
}
