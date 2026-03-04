// generated - do not edit!

import {animlib_CNmPoseTask} from './CNmPoseTask';
// Class size: 0xD0
// BaseClass: : public CS2::animlib::CNmPoseTask
export const animlib_CNmTwoBoneIKTask  = {
	...animlib_CNmPoseTask,
	m_nEffectorBoneIdx: 88n, // int32_t m_nEffectorBoneIdx; |  0x58 | Schema_Builtin | Size: 0x4
	m_nEffectorTargetBoneIdx: 92n, // int32_t m_nEffectorTargetBoneIdx; |  0x5c | Schema_Builtin | Size: 0x4
	m_targetTransform: 96n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_effectorTarget: 128n, // animlib::CNmTarget  | Schema_DeclaredClass | Size: 0x30
	m_blendMode: 176n, // animlib::NmIKBlendMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_flBlendWeight: 180n, // float32 m_flBlendWeight; |  0xb4 | Schema_Builtin | Size: 0x4
	m_bIsTargetInWorldSpace: 184n, // bool m_bIsTargetInWorldSpace; |  0xb8 | Schema_Builtin | Size: 0x1
	m_bIsRunningFromDeserializedData: 185n, // bool m_bIsRunningFromDeserializedData; |  0xb9 | Schema_Builtin | Size: 0x1
	m_flReferencePoseTwistWeight: 188n, // float32 m_flReferencePoseTwistWeight; |  0xbc | Schema_Builtin | Size: 0x4
	m_debugEffectorBoneID: 192n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
}
