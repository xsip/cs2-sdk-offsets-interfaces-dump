// generated - do not edit!

// Class size: 0x1D0
// BaseClass: NONE
export const client_CRR_Response  = {
	m_Type: 0n, // uint8_t m_Type; |  0x0 | Schema_Builtin | Size: 0x1
	m_szResponseName: 1n, // char m_szResponseName[192]; |  0x1 | Schema_FixedArray | Size: 0xc0
	m_szMatchingRule: 193n, // char m_szMatchingRule[128]; |  0xc1 | Schema_FixedArray | Size: 0x80
	m_Params: 352n, // client::ResponseParams  | Schema_DeclaredClass | Size: 0x20
	m_fMatchScore: 384n, // float32 m_fMatchScore; |  0x180 | Schema_Builtin | Size: 0x4
	m_bAnyMatchingRulesInCooldown: 388n, // bool m_bAnyMatchingRulesInCooldown; |  0x184 | Schema_Builtin | Size: 0x1
	m_szSpeakerContext: 392n, // char* m_szSpeakerContext; |  0x188 | Schema_Ptr | Size: 0x8
	m_szWorldContext: 400n, // char* m_szWorldContext; |  0x190 | Schema_Ptr | Size: 0x8
	m_Followup: 408n, // client::ResponseFollowup  | Schema_DeclaredClass | Size: 0x31
	m_recipientFilter: 458n, // GlobalTypes::CUtlSymbol  | Schema_Atomic | Size: 0x2
}
