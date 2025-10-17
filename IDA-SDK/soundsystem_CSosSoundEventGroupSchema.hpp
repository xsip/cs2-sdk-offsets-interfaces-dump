#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosSoundEventGroupSchema {
    char vTable556[0x8];
    soundsystem_SosGroupType_t m_nGroupType;
    bool m_bBlocksEvents;
    char pad_557[0x3];
    int32_t m_nBlockMaxCount;
    float32 m_flMemberLifespanTime;
    bool m_bInvertMatch;
    char pad_558[0x3];
    soundsystem_SosGroupFieldBehavior_t m_Behavior_EventName;
    CUtlString m_matchSoundEventName;
    bool m_bMatchEventSubString;
    char pad_559[0x7];
    CUtlString m_matchSoundEventSubString;
    soundsystem_SosGroupFieldBehavior_t m_Behavior_EntIndex;
    float32 m_flEntIndex;
    soundsystem_SosGroupFieldBehavior_t m_Behavior_Opvar;
    float32 m_flOpvar;
    soundsystem_SosGroupFieldBehavior_t m_Behavior_String;
    char pad_560[0x4];
    CUtlString m_opvarString;
    char m_vActions[0x18];
};
