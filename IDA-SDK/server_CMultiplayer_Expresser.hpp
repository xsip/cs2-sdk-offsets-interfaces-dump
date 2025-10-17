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
    char vTable2634[0x60];
    entity2_GameTime_t m_flStopTalkTime;
    entity2_GameTime_t m_flStopTalkTimeWithoutDelay;
    entity2_GameTime_t m_flQueuedSpeechTime;
    entity2_GameTime_t m_flBlockedTalkTime;
    int32_t m_voicePitch;
    entity2_GameTime_t m_flLastTimeAcceptedSpeak;
    bool m_bAllowSpeakingInterrupts;
    bool m_bConsiderSceneInvolvementAsSpeech;
    bool m_bSceneEntityDisabled;
    char pad_2635[0x1];
    int32_t m_nLastSpokenPriority;
    char pad_2636[0x18];
    server_CBaseFlex* m_pOuter;
    bool m_bAllowMultipleScenes;
    char end_pad_2749[0x7];
};
