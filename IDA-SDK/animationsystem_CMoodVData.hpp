#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CMoodVData {
    char m_sModelName[0xe0];
    animationsystem_MoodType_t m_nMoodType;
    char pad_434[0x4];
    char m_animationLayers[0x18];
};
