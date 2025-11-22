// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x540
// BaseClass: : public CS2::server::CPointEntity
export const server_CEnvShake  = {
	...server_CPointEntity,
	m_limitToEntity: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_Amplitude: 1272n, // float32 m_Amplitude; |  0x4f8 | Schema_Builtin | Size: 0x4
	m_Frequency: 1276n, // float32 m_Frequency; |  0x4fc | Schema_Builtin | Size: 0x4
	m_Duration: 1280n, // float32 m_Duration; |  0x500 | Schema_Builtin | Size: 0x4
	m_Radius: 1284n, // float32 m_Radius; |  0x504 | Schema_Builtin | Size: 0x4
	m_stopTime: 1288n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nextShake: 1292n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_currentAmp: 1296n, // float32 m_currentAmp; |  0x510 | Schema_Builtin | Size: 0x4
	m_maxForce: 1300n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_shakeCallback: 1320n, // server::CPhysicsShake  | Schema_DeclaredClass | Size: 0x18
}
