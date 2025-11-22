// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x1460
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_ParticleSystem  = {
	...client_C_BaseModelEntity,
	m_szSnapshotFileName: 3760n, // char m_szSnapshotFileName[512]; |  0xeb0 | Schema_FixedArray | Size: 0x200
	m_bActive: 4272n, // bool m_bActive; |  0x10b0 | Schema_Builtin | Size: 0x1
	m_bFrozen: 4273n, // bool m_bFrozen; |  0x10b1 | Schema_Builtin | Size: 0x1
	m_flFreezeTransitionDuration: 4276n, // float32 m_flFreezeTransitionDuration; |  0x10b4 | Schema_Builtin | Size: 0x4
	m_nStopType: 4280n, // int32_t m_nStopType; |  0x10b8 | Schema_Builtin | Size: 0x4
	m_bAnimateDuringGameplayPause: 4284n, // bool m_bAnimateDuringGameplayPause; |  0x10bc | Schema_Builtin | Size: 0x1
	m_iEffectIndex: 4288n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_flStartTime: 4296n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flPreSimTime: 4300n, // float32 m_flPreSimTime; |  0x10cc | Schema_Builtin | Size: 0x4
	m_vServerControlPoints: 4304n, // GlobalTypes::Vector[4]  | Schema_FixedArray | Size: 0x30
	m_iServerControlPointAssignments: 4352n, // uint8_t m_iServerControlPointAssignments[4]; |  0x1100 | Schema_FixedArray | Size: 0x4
	m_hControlPointEnts: 4356n, // GlobalTypes::CHandle  | Schema_FixedArray | Size: 0x100
	m_bNoSave: 4612n, // bool m_bNoSave; |  0x1204 | Schema_Builtin | Size: 0x1
	m_bNoFreeze: 4613n, // bool m_bNoFreeze; |  0x1205 | Schema_Builtin | Size: 0x1
	m_bNoRamp: 4614n, // bool m_bNoRamp; |  0x1206 | Schema_Builtin | Size: 0x1
	m_bStartActive: 4615n, // bool m_bStartActive; |  0x1207 | Schema_Builtin | Size: 0x1
	m_iszEffectName: 4616n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszControlPointNames: 4624n, // GlobalTypes::CUtlSymbolLarge[64]  | Schema_FixedArray | Size: 0x200
	m_nDataCP: 5136n, // int32_t m_nDataCP; |  0x1410 | Schema_Builtin | Size: 0x4
	m_vecDataCPValue: 5140n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nTintCP: 5152n, // int32_t m_nTintCP; |  0x1420 | Schema_Builtin | Size: 0x4
	m_clrTint: 5156n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bOldActive: 5192n, // bool m_bOldActive; |  0x1448 | Schema_Builtin | Size: 0x1
	m_bOldFrozen: 5193n, // bool m_bOldFrozen; |  0x1449 | Schema_Builtin | Size: 0x1
}
