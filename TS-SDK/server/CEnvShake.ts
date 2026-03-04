// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x4F8
// BaseClass: : public CS2::server::CPointEntity
export const server_CEnvShake  = {
	...server_CPointEntity,
	m_limitToEntity: 1192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_Amplitude: 1200n, // float32 m_Amplitude; |  0x4b0 | Schema_Builtin | Size: 0x4
	m_Frequency: 1204n, // float32 m_Frequency; |  0x4b4 | Schema_Builtin | Size: 0x4
	m_Duration: 1208n, // float32 m_Duration; |  0x4b8 | Schema_Builtin | Size: 0x4
	m_Radius: 1212n, // float32 m_Radius; |  0x4bc | Schema_Builtin | Size: 0x4
	m_stopTime: 1216n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nextShake: 1220n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_currentAmp: 1224n, // float32 m_currentAmp; |  0x4c8 | Schema_Builtin | Size: 0x4
	m_maxForce: 1228n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_shakeCallback: 1248n, // server::CPhysicsShake  | Schema_DeclaredClass | Size: 0x18
}
