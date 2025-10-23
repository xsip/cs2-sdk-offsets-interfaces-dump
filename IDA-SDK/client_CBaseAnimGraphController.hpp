#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_CSkeletonInstance;
#include "client_CAnimGraphNetworkedVariables.hpp"
#include "animationsystem_HSequence.hpp"
#include "entity2_GameTime_t.hpp"

class client_CBaseAnimGraphController {
    char pad_782[0x8];
    client_CSkeletonInstance* m_pSkeletonInstance;
    char vTable772[0x8];
    client_CAnimGraphNetworkedVariables m_animGraphNetworkedVars;
    bool m_bSequenceFinished;
    char pad_773[0x3];
    float32 m_flSoundSyncTime;
    uint32_t m_nActiveIKChainMask;
    animationsystem_HSequence m_hSequence;
    entity2_GameTime_t m_flSeqStartTime;
    float32 m_flSeqFixedCycle;
    client_AnimLoopMode_t m_nAnimLoopMode;
    CNetworkedQuantizedFloat m_flPlaybackRate;
    char pad_774[0x4];
    client_SequenceFinishNotifyState_t m_nNotifyState;
    char pad_775[0x1];
    bool m_bNetworkedAnimationInputsChanged;
    bool m_bNetworkedSequenceChanged;
    bool m_bLastUpdateSkipped;
    char pad_776[0x3];
    entity2_GameTime_t m_flPrevAnimUpdateTime;
    char pad_777[0x384];
    char m_hGraphDefinitionAG2[0x8];
    bool m_bIsUsingAG2;
    char pad_778[0x7];
    char m_serializedPoseRecipeAG2[0x18];
    int32_t m_nSerializePoseRecipeSizeAG2;
    int32_t m_nSerializePoseRecipeVersionAG2;
    uint8_t m_nGraphCreationFlagsAG2;
    char pad_779[0x1eb];
    int32_t m_nServerGraphDefReloadCountAG2;
    char pad_780[0x4];
    int32_t m_nServerSerializationContextIteration;
    char pad_781[0x8];
};
