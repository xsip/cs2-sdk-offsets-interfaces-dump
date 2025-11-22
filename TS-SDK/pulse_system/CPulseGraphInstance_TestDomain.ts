// generated - do not edit!

import {pulse_runtime_lib_CBasePulseGraphInstance} from '../pulse_runtime_lib/CBasePulseGraphInstance';
// Class size: 0x160
// BaseClass: : public CS2::pulse_runtime_lib::CBasePulseGraphInstance
export const pulse_system_CPulseGraphInstance_TestDomain  = {
	...pulse_runtime_lib_CBasePulseGraphInstance,
	m_bIsRunningUnitTests: 304n, // bool m_bIsRunningUnitTests; |  0x130 | Schema_Builtin | Size: 0x1
	m_bExplicitTimeStepping: 305n, // bool m_bExplicitTimeStepping; |  0x131 | Schema_Builtin | Size: 0x1
	m_bExpectingToDestroyWithYieldedCursors: 306n, // bool m_bExpectingToDestroyWithYieldedCursors; |  0x132 | Schema_Builtin | Size: 0x1
	m_bQuietTracepoints: 307n, // bool m_bQuietTracepoints; |  0x133 | Schema_Builtin | Size: 0x1
	m_bExpectingCursorTerminatedDueToMaxInstructions: 308n, // bool m_bExpectingCursorTerminatedDueToMaxInstructions; |  0x134 | Schema_Builtin | Size: 0x1
	m_nCursorsTerminatedDueToMaxInstructions: 312n, // int32_t m_nCursorsTerminatedDueToMaxInstructions; |  0x138 | Schema_Builtin | Size: 0x4
	m_nNextValidateIndex: 316n, // int32_t m_nNextValidateIndex; |  0x13c | Schema_Builtin | Size: 0x4
	m_Tracepoints: 320n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_bTestYesOrNoPath: 344n, // bool m_bTestYesOrNoPath; |  0x158 | Schema_Builtin | Size: 0x1
}
