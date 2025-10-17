#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_HSequence.hpp"
#include "entity2_GameTime_t.hpp"
#include "client_SceneEventId_t.hpp"

class client_CSceneEventInfo {
    int32_t m_iLayer;
    int32_t m_iPriority;
    animationsystem_HSequence m_hSequence;
    float32 m_flWeight;
    bool m_bHasArrived;
    char pad_1077[0x3];
    int32_t m_nType;
    entity2_GameTime_t m_flNext;
    bool m_bIsGesture;
    bool m_bShouldRemove;
    char pad_1078[0x26];
    char m_hTarget[0x4];
    client_SceneEventId_t m_nSceneEventId;
    bool m_bClientSide;
    bool m_bStarted;
    char end_pad_1079[0x2];
};
