#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_system_CPulseTurtleGraphicsCursor {
    char pad_530[0xd0];
    Color m_Color;
    Vector2D m_vPos;
    float32 m_flHeadingDeg;
    bool m_bPenUp;
    char end_pad_4320[0x7];
};
