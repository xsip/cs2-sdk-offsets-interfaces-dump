#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimBoneDifference {
    CBufferString m_name;
    CBufferString m_parent;
    Vector m_posError;
    bool m_bHasRotation;
    bool m_bHasMovement;
    char end_pad_417[0x2];
};
