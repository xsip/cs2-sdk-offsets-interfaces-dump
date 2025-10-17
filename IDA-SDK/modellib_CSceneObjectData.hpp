#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CSceneObjectData {
    Vector m_vMinBounds;
    Vector m_vMaxBounds;
    char m_drawCalls[0x10];
    char m_drawBounds[0x10];
    char m_meshlets[0x10];
    Vector4D m_vTintColor;
    char end_pad_372[0x38];
};
