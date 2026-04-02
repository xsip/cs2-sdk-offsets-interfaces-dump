// generated - do not edit!

import {animlib_CNmPoseNode_CDefinition} from './CNmPoseNode_CDefinition';
// Class size: 0xB0
// BaseClass: : public CS2::animlib::CNmPoseNode_CDefinition
export const animlib_CNmStateNode_CDefinition  = {
	...animlib_CNmPoseNode_CDefinition,
	m_nChildNodeIdx: 16n, // int16_t m_nChildNodeIdx; |  0x10 | Schema_Builtin | Size: 0x2
	m_entryEvents: 24n, // GlobalTypes::CUtlLeanVectorFixedGrowable<GlobalTypes::CGlobalSymbol>  | Schema_Atomic | Size: 0x20
	m_executeEvents: 56n, // GlobalTypes::CUtlLeanVectorFixedGrowable<GlobalTypes::CGlobalSymbol>  | Schema_Atomic | Size: 0x20
	m_exitEvents: 88n, // GlobalTypes::CUtlLeanVectorFixedGrowable<GlobalTypes::CGlobalSymbol>  | Schema_Atomic | Size: 0x20
	m_timedRemainingEvents: 120n, // GlobalTypes::CUtlLeanVectorFixedGrowable<animlib::CNmStateNode_TimedEvent_t>  | Schema_Atomic | Size: 0x18
	m_timedElapsedEvents: 144n, // GlobalTypes::CUtlLeanVectorFixedGrowable<animlib::CNmStateNode_TimedEvent_t>  | Schema_Atomic | Size: 0x18
	m_nLayerWeightNodeIdx: 168n, // int16_t m_nLayerWeightNodeIdx; |  0xa8 | Schema_Builtin | Size: 0x2
	m_nLayerRootMotionWeightNodeIdx: 170n, // int16_t m_nLayerRootMotionWeightNodeIdx; |  0xaa | Schema_Builtin | Size: 0x2
	m_nLayerBoneMaskNodeIdx: 172n, // int16_t m_nLayerBoneMaskNodeIdx; |  0xac | Schema_Builtin | Size: 0x2
	m_bIsOffState: 174n, // bool m_bIsOffState; |  0xae | Schema_Builtin | Size: 0x1
	m_bUseActualElapsedTimeInStateForTimedEvents: 175n, // bool m_bUseActualElapsedTimeInStateForTimedEvents; |  0xaf | Schema_Builtin | Size: 0x1
}
