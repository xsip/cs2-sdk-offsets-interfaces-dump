// generated - do not edit!

import {animlib_CNmPoseTask} from './CNmPoseTask';
// Class size: 0x130
// BaseClass: : public CS2::animlib::CNmPoseTask
export const animlib_CNmChainSolverTask  = {
	...animlib_CNmPoseTask,
	m_nEffectorBoneIdx: 88n, // int32_t m_nEffectorBoneIdx; |  0x58 | Schema_Builtin | Size: 0x4
	m_nEffectorTargetBoneIdx: 92n, // int32_t m_nEffectorTargetBoneIdx; |  0x5c | Schema_Builtin | Size: 0x4
	m_targetTransform: 96n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_nNumBonesInChain: 128n, // int32_t m_nNumBonesInChain; |  0x80 | Schema_Builtin | Size: 0x4
	m_effectorTarget: 144n, // animlib::CNmTarget  | Schema_DeclaredClass | Size: 0x30
	m_blendMode: 192n, // animlib::NmIKBlendMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_flBlendWeight: 196n, // float32 m_flBlendWeight; |  0xc4 | Schema_Builtin | Size: 0x4
	m_bIsTargetInWorldSpace: 200n, // bool m_bIsTargetInWorldSpace; |  0xc8 | Schema_Builtin | Size: 0x1
	m_bIsRunningFromDeserializedData: 201n, // bool m_bIsRunningFromDeserializedData; |  0xc9 | Schema_Builtin | Size: 0x1
	m_debugEffectorBoneID: 208n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_chainStartTransformMS: 224n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_debugRequestedTargetTransformMS: 256n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_debugTotalChainLength: 288n, // float32 m_debugTotalChainLength; |  0x120 | Schema_Builtin | Size: 0x4
}
