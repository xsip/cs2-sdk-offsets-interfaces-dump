// generated - do not edit!

import {pulse_runtime_lib_CPulseCell_BaseYieldingInflow} from './CPulseCell_BaseYieldingInflow';
// Class size: 0xF8
// BaseClass: : public CS2::pulse_runtime_lib::CPulseCell_BaseYieldingInflow
export const pulse_runtime_lib_CPulseCell_Timeline  = {
	...pulse_runtime_lib_CPulseCell_BaseYieldingInflow,
	m_TimelineEvents: 72n, // server::CUtlVector<pulse_runtime_lib::CPulseCell_Timeline::TimelineEvent_t>  | Schema_Atomic | Size: 0x18
	m_bWaitForChildOutflows: 96n, // bool m_bWaitForChildOutflows; |  0x60 | Schema_Builtin | Size: 0x1
	m_OnFinished: 104n, // pulse_runtime_lib::CPulse_ResumePoint  | Schema_DeclaredClass | Size: 0x48
	m_OnCanceled: 176n, // pulse_runtime_lib::CPulse_ResumePoint  | Schema_DeclaredClass | Size: 0x48
}
