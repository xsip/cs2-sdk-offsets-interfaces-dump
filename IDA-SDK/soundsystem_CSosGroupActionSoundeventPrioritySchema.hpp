#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionSoundeventPrioritySchema {
    char pad_555[0x8];
    CUtlString m_priorityValue;
    CUtlString m_priorityVolumeScalar;
    CUtlString m_priorityContributeButDontRead;
    CUtlString m_bPriorityReadButDontContribute;
    char end_pad_564[0x10];
};
