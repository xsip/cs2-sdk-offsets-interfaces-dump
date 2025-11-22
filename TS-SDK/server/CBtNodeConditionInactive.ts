// generated - do not edit!

import {server_CBtNodeCondition} from './CBtNodeCondition';
// Class size: 0x98
// BaseClass: : public CS2::server::CBtNodeCondition
export const server_CBtNodeConditionInactive  = {
	...server_CBtNodeCondition,
	m_flRoundStartThresholdSeconds: 120n, // float32 m_flRoundStartThresholdSeconds; |  0x78 | Schema_Builtin | Size: 0x4
	m_flSensorInactivityThresholdSeconds: 124n, // float32 m_flSensorInactivityThresholdSeconds; |  0x7c | Schema_Builtin | Size: 0x4
	m_SensorInactivityTimer: 128n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
