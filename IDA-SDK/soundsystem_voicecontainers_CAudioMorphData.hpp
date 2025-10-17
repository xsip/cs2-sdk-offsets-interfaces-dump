#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_voicecontainers_CAudioMorphData {
    char m_times[0x18];
    char m_nameHashCodes[0x18];
    char m_nameStrings[0x18];
    char m_samples[0x18];
    float32 m_flEaseIn;
    float32 m_flEaseOut;
};
