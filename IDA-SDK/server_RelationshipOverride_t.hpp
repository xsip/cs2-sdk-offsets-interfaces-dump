#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_RelationshipOverride_t {
    client_Disposition_t disposition;
    int32_t priority;
    char entity[0x4];
    client_Class_T classType;
};
