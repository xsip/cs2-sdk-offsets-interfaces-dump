// generated - do not edit!

import {client_CSkeletonAnimationController} from '../client/CSkeletonAnimationController';
// Class size: 0x7B0
// BaseClass: : public CS2::client::CSkeletonAnimationController
export const server_CBaseAnimGraphController  = {
	...client_CSkeletonAnimationController,
	m_animGraphNetworkedVars: 24n, // server::CAnimGraphNetworkedVariables  | Schema_DeclaredClass | Size: 0x208
	m_bSequenceFinished: 544n, // bool m_bSequenceFinished; |  0x220 | Schema_Builtin | Size: 0x1
	m_flSoundSyncTime: 548n, // float32 m_flSoundSyncTime; |  0x224 | Schema_Builtin | Size: 0x4
	m_nActiveIKChainMask: 552n, // uint32_t m_nActiveIKChainMask; |  0x228 | Schema_Builtin | Size: 0x4
	m_hSequence: 556n, // animationsystem::HSequence  | Schema_DeclaredClass | Size: 0x4
	m_flSeqStartTime: 560n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flSeqFixedCycle: 564n, // float32 m_flSeqFixedCycle; |  0x234 | Schema_Builtin | Size: 0x4
	m_nAnimLoopMode: 568n, // client::AnimLoopMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flPlaybackRate: 572n, // GlobalTypes::CNetworkedQuantizedFloat  | Schema_Atomic | Size: 0x8
	m_nNotifyState: 584n, // client::SequenceFinishNotifyState_t  | Schema_DeclaredEnum | Size: 0x1
	m_bNetworkedAnimationInputsChanged: 586n, // bool m_bNetworkedAnimationInputsChanged; |  0x24a | Schema_Builtin | Size: 0x1
	m_bNetworkedSequenceChanged: 587n, // bool m_bNetworkedSequenceChanged; |  0x24b | Schema_Builtin | Size: 0x1
	m_bLastUpdateSkipped: 588n, // bool m_bLastUpdateSkipped; |  0x24c | Schema_Builtin | Size: 0x1
	m_flPrevAnimUpdateTime: 592n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hGraphDefinitionAG2: 1416n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCNmGraphDefinition>  | Schema_Atomic | Size: 0x8
	m_bIsUsingAG2: 1424n, // bool m_bIsUsingAG2; |  0x590 | Schema_Builtin | Size: 0x1
	m_serializedPoseRecipeAG2: 1432n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_nSerializePoseRecipeSizeAG2: 1456n, // int32_t m_nSerializePoseRecipeSizeAG2; |  0x5b0 | Schema_Builtin | Size: 0x4
	m_nSerializePoseRecipeVersionAG2: 1460n, // int32_t m_nSerializePoseRecipeVersionAG2; |  0x5b4 | Schema_Builtin | Size: 0x4
	m_nGraphCreationFlagsAG2: 1464n, // uint8_t m_nGraphCreationFlagsAG2; |  0x5b8 | Schema_Builtin | Size: 0x1
	m_nServerGraphDefReloadCountAG2: 1952n, // int32_t m_nServerGraphDefReloadCountAG2; |  0x7a0 | Schema_Builtin | Size: 0x4
	m_nServerSerializationContextIteration: 1956n, // int32_t m_nServerSerializationContextIteration; |  0x7a4 | Schema_Builtin | Size: 0x4
}
