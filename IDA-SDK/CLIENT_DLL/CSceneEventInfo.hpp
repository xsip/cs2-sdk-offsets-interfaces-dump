#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "HSequence.hpp"
#include "GameTime_t.hpp"
#include "SceneEventId_t.hpp"

class CSceneEventInfo {
    int32_t m_iLayer;
    int32_t m_iPriority;
    HSequence m_hSequence;
    float32 m_flWeight;
    bool m_bHasArrived;
    char pad_515[0x3];
    int32_t m_nType;
    GameTime_t m_flNext;
    bool m_bIsGesture;
    bool m_bShouldRemove;
    char pad_516[0x26];
    char m_hTarget[0x4];
    SceneEventId_t m_nSceneEventId;
    bool m_bClientSide;
    bool m_bStarted;
    char end_pad_517[0x2];
};
