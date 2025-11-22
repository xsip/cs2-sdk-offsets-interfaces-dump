// generated - do not edit!

import {animgraphlib_CAnimComponentUpdater} from './CAnimComponentUpdater';
// Class size: 0xD8
// BaseClass: : public CS2::animgraphlib::CAnimComponentUpdater
export const animgraphlib_CRagdollComponentUpdater  = {
	...animgraphlib_CAnimComponentUpdater,
	m_ragdollNodePaths: 48n, // GlobalTypes::CUtlVector<animgraphlib::CAnimNodePath>  | Schema_Atomic | Size: 0x18
	m_followAttachmentNodePaths: 72n, // GlobalTypes::CUtlVector<animgraphlib::CAnimNodePath>  | Schema_Atomic | Size: 0x18
	m_boneIndices: 96n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_boneNames: 120n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_weightLists: 144n, // GlobalTypes::CUtlVector<animgraphlib::WeightList>  | Schema_Atomic | Size: 0x18
	m_boneToWeightIndices: 168n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_flSpringFrequencyMin: 192n, // float32 m_flSpringFrequencyMin; |  0xc0 | Schema_Builtin | Size: 0x4
	m_flSpringFrequencyMax: 196n, // float32 m_flSpringFrequencyMax; |  0xc4 | Schema_Builtin | Size: 0x4
	m_flMaxStretch: 200n, // float32 m_flMaxStretch; |  0xc8 | Schema_Builtin | Size: 0x4
	m_bSolidCollisionAtZeroWeight: 204n, // bool m_bSolidCollisionAtZeroWeight; |  0xcc | Schema_Builtin | Size: 0x1
}
