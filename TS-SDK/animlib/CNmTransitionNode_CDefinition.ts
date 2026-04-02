// generated - do not edit!

import {animlib_CNmPoseNode_CDefinition} from './CNmPoseNode_CDefinition';
// Class size: 0x30
// BaseClass: : public CS2::animlib::CNmPoseNode_CDefinition
export const animlib_CNmTransitionNode_CDefinition  = {
	...animlib_CNmPoseNode_CDefinition,
	m_nTargetStateNodeIdx: 16n, // int16_t m_nTargetStateNodeIdx; |  0x10 | Schema_Builtin | Size: 0x2
	m_nDurationOverrideNodeIdx: 18n, // int16_t m_nDurationOverrideNodeIdx; |  0x12 | Schema_Builtin | Size: 0x2
	m_timeOffsetOverrideNodeIdx: 20n, // int16_t m_timeOffsetOverrideNodeIdx; |  0x14 | Schema_Builtin | Size: 0x2
	m_startBoneMaskNodeIdx: 22n, // int16_t m_startBoneMaskNodeIdx; |  0x16 | Schema_Builtin | Size: 0x2
	m_flDuration: 24n, // float32 m_flDuration; |  0x18 | Schema_Builtin | Size: 0x4
	m_boneMaskBlendInTimePercentage: 28n, // animlib::NmPercent_t  | Schema_DeclaredClass | Size: 0x4
	m_flTimeOffset: 32n, // float32 m_flTimeOffset; |  0x20 | Schema_Builtin | Size: 0x4
	m_transitionOptions: 36n, // animlib::CNmBitFlags  | Schema_DeclaredClass | Size: 0x4
	m_targetSyncIDNodeIdx: 40n, // int16_t m_targetSyncIDNodeIdx; |  0x28 | Schema_Builtin | Size: 0x2
	m_blendWeightEasing: 42n, // animlib::NmEasingOperation_t  | Schema_DeclaredEnum | Size: 0x1
	m_rootMotionBlend: 43n, // animlib::NmRootMotionBlendMode_t  | Schema_DeclaredEnum | Size: 0x1
}
