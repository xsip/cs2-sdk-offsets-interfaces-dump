// generated - do not edit!

import {animgraphlib_CSequenceUpdateNode} from './CSequenceUpdateNode';
// Class size: 0xD8
// BaseClass: : public CS2::animgraphlib::CSequenceUpdateNode
export const animgraphlib_CJumpHelperUpdateNode  = {
	...animgraphlib_CSequenceUpdateNode,
	m_hTargetParam: 176n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_flOriginalJumpMovement: 180n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flOriginalJumpDuration: 192n, // float32 m_flOriginalJumpDuration; |  0xc0 | Schema_Builtin | Size: 0x4
	m_flJumpStartCycle: 196n, // float32 m_flJumpStartCycle; |  0xc4 | Schema_Builtin | Size: 0x4
	m_flJumpEndCycle: 200n, // float32 m_flJumpEndCycle; |  0xc8 | Schema_Builtin | Size: 0x4
	m_eCorrectionMethod: 204n, // animgraphlib::JumpCorrectionMethod  | Schema_DeclaredEnum | Size: 0x4
	m_bTranslationAxis: 208n, // bool m_bTranslationAxis[3]; |  0xd0 | Schema_FixedArray | Size: 0x3
	m_bScaleSpeed: 211n, // bool m_bScaleSpeed; |  0xd3 | Schema_Builtin | Size: 0x1
}
