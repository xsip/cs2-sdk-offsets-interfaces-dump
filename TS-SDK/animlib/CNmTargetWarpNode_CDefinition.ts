// generated - do not edit!

import {animlib_CNmPoseNode_CDefinition} from './CNmPoseNode_CDefinition';
// Class size: 0x30
// BaseClass: : public CS2::animlib::CNmPoseNode_CDefinition
export const animlib_CNmTargetWarpNode_CDefinition  = {
	...animlib_CNmPoseNode_CDefinition,
	m_nClipReferenceNodeIdx: 16n, // int16_t m_nClipReferenceNodeIdx; |  0x10 | Schema_Builtin | Size: 0x2
	m_nTargetValueNodeIdx: 18n, // int16_t m_nTargetValueNodeIdx; |  0x12 | Schema_Builtin | Size: 0x2
	m_samplingMode: 20n, // animlib::CNmRootMotionData::SamplingMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_bAllowTargetUpdate: 21n, // bool m_bAllowTargetUpdate; |  0x15 | Schema_Builtin | Size: 0x1
	m_bAlignWithTargetAtLastWarpEvent: 22n, // bool m_bAlignWithTargetAtLastWarpEvent; |  0x16 | Schema_Builtin | Size: 0x1
	m_flSamplingPositionErrorThresholdSq: 24n, // float32 m_flSamplingPositionErrorThresholdSq; |  0x18 | Schema_Builtin | Size: 0x4
	m_flMaxTangentLength: 28n, // float32 m_flMaxTangentLength; |  0x1c | Schema_Builtin | Size: 0x4
	m_flLerpFallbackDistanceThreshold: 32n, // float32 m_flLerpFallbackDistanceThreshold; |  0x20 | Schema_Builtin | Size: 0x4
	m_flTargetUpdateDistanceThreshold: 36n, // float32 m_flTargetUpdateDistanceThreshold; |  0x24 | Schema_Builtin | Size: 0x4
	m_flTargetUpdateAngleThresholdRadians: 40n, // float32 m_flTargetUpdateAngleThresholdRadians; |  0x28 | Schema_Builtin | Size: 0x4
}
