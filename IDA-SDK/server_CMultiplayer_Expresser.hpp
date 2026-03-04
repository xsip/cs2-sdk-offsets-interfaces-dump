#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CBaseFlex;
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"
#include "entity2_GameTime_t.hpp"

class server_CMultiplayer_Expresser {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    void **__vftable_6;
    void **__vftable_7;
    void **__vftable_8;
    void **__vftable_9;
    void **__vftable_10;
    void **__vftable_11;
    entity2_GameTime_t m_flStopTalkTime;
    entity2_GameTime_t m_flStopTalkTimeWithoutDelay;
    entity2_GameTime_t m_flQueuedSpeechTime;
    entity2_GameTime_t m_flBlockedTalkTime;
    int32_t m_voicePitch;
    entity2_GameTime_t m_flLastTimeAcceptedSpeak;
    bool m_bAllowSpeakingInterrupts;
    bool m_bConsiderSceneInvolvementAsSpeech;
    bool m_bSceneEntityDisabled;
    char pad_2730[0x1];
    int32_t m_nLastSpokenPriority;
    char pad_2731[0x18];
    server_CBaseFlex* m_pOuter;
    bool m_bAllowMultipleScenes;
    char end_pad_2845[0x7];
};
