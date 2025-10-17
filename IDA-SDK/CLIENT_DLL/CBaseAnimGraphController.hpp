#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CSkeletonInstance;
#include "CAnimGraphNetworkedVariables.hpp"
#include "HSequence.hpp"
#include "GameTime_t.hpp"
#include "GameTime_t.hpp"

class CBaseAnimGraphController {
    char pad_219[0x8];
    CSkeletonInstance* m_pSkeletonInstance;
    char _vtable_pad_209[0x8];
    CAnimGraphNetworkedVariables m_animGraphNetworkedVars;
    bool m_bSequenceFinished;
    char pad_210[0x3];
    float32 m_flSoundSyncTime;
    uint32_t m_nActiveIKChainMask;
    HSequence m_hSequence;
    GameTime_t m_flSeqStartTime;
    float32 m_flSeqFixedCycle;
    AnimLoopMode_t m_nAnimLoopMode;
    CNetworkedQuantizedFloat m_flPlaybackRate;
    char pad_211[0x4];
    SequenceFinishNotifyState_t m_nNotifyState;
    char pad_212[0x1];
    bool m_bNetworkedAnimationInputsChanged;
    bool m_bNetworkedSequenceChanged;
    bool m_bLastUpdateSkipped;
    char pad_213[0x3];
    GameTime_t m_flPrevAnimUpdateTime;
    char pad_214[0x384];
    char m_hGraphDefinitionAG2[0x8];
    bool m_bIsUsingAG2;
    char pad_215[0x7];
    char m_serializedPoseRecipeAG2[0x18];
    int32_t m_nSerializePoseRecipeSizeAG2;
    int32_t m_nSerializePoseRecipeVersionAG2;
    uint8_t m_nGraphCreationFlagsAG2;
    char pad_216[0x1eb];
    int32_t m_nServerGraphDefReloadCountAG2;
    char pad_217[0x4];
    int32_t m_nServerSerializationContextIteration;
    char pad_218[0x8];
};
