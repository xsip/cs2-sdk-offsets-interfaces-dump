#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"

class animgraphlib_CToggleComponentActionUpdater {
    char pad_26[0x18];
    modellib_AnimComponentID m_componentID;
    bool m_bSetEnabled;
    char end_pad_244[0x3];
};
