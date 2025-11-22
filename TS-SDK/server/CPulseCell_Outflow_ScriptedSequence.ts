// generated - do not edit!

import {pulse_runtime_lib_CPulseCell_BaseYieldingInflow} from '../pulse_runtime_lib/CPulseCell_BaseYieldingInflow';
// Class size: 0x150
// BaseClass: : public CS2::pulse_runtime_lib::CPulseCell_BaseYieldingInflow
export const server_CPulseCell_Outflow_ScriptedSequence  = {
	...pulse_runtime_lib_CPulseCell_BaseYieldingInflow,
	m_szSyncGroup: 72n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nExpectedNumSequencesInSyncGroup: 80n, // int32_t m_nExpectedNumSequencesInSyncGroup; |  0x50 | Schema_Builtin | Size: 0x4
	m_bEnsureOnNavmeshOnFinish: 84n, // bool m_bEnsureOnNavmeshOnFinish; |  0x54 | Schema_Builtin | Size: 0x1
	m_bDontTeleportAtEnd: 85n, // bool m_bDontTeleportAtEnd; |  0x55 | Schema_Builtin | Size: 0x1
	m_bDisallowInterrupts: 86n, // bool m_bDisallowInterrupts; |  0x56 | Schema_Builtin | Size: 0x1
	m_scriptedSequenceDataMain: 88n, // server::PulseScriptedSequenceData_t  | Schema_DeclaredClass | Size: 0x38
	m_vecAdditionalActors: 144n, // GlobalTypes::CUtlVector<server::PulseScriptedSequenceData_t>  | Schema_Atomic | Size: 0x18
	m_OnFinished: 168n, // pulse_runtime_lib::CPulse_ResumePoint  | Schema_DeclaredClass | Size: 0x48
	m_OnCanceled: 240n, // pulse_runtime_lib::CPulse_ResumePoint  | Schema_DeclaredClass | Size: 0x48
	m_Triggers: 312n, // server::CUtlVector<pulse_runtime_lib::CPulse_OutflowConnection>  | Schema_Atomic | Size: 0x18
}
