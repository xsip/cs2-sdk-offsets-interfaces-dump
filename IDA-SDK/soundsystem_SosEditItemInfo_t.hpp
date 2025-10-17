#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_SosEditItemInfo_t {
    soundsystem_SosEditItemType_t itemType;
    char pad_561[0x4];
    CUtlString itemName;
    CUtlString itemTypeName;
    char pad_562[0x8];
    CUtlString itemKVString;
    Vector2D itemPos;
};
